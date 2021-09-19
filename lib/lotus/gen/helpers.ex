defmodule Lotus.Gen.Helpers do
  @moduledoc """
  Helper functions to create and render files
  """

  @type artifact() :: %{}
  @doc """
  List artifacts (directory and files) that need to be generated. For the purpose of wrapping a new component.
  """
  @spec list_artifacts(map()) :: map()
  def list_artifacts(%{
        hook: hook,
        file: file,
        examples: examples,
        playground: playground
      }) do
    [
      {:directory, "priv/catalogue/#{file}"},
      {:main, "lib/lotus/#{file}.ex"},
      {:test, "test/lotus/#{file}_test.exs"},
      {:playground, (playground && "priv/catalogue/#{file}/playground.ex") || nil},
      {:hook, (hook && "lib/lotus/#{file}.hooks.js") || nil},
      examples(file, examples)
    ]
    |> Enum.reject(&(&1 |> elem(1) |> is_nil()))
    |> Enum.into(%{})
  end

  defp examples(file, count) do
    example_files = for i <- 1..count, do: "priv/catalogue/#{file}/example0#{i}.ex"
    {:examples, example_files}
  end

  def generate_artifacts(
        %{
          directory: directory,
          main: main,
          test: test,
          examples: examples
        } = config
      ) do
    File.mkdir(directory)
    File.touch(main)
    File.touch(test)
    Enum.each(examples, &File.touch!/1)
    if config[:playground], do: File.touch(config[:playground])
    if config[:hook], do: File.touch(config[:hook])
  end

  @templates "lib/lotus/gen/templates"

  def write_main(config) do
    EEx.eval_file("#{@templates}/main.eex", Map.to_list(config))
  end

  def write_test(config) do
    EEx.eval_file("#{@templates}/test.eex", Map.to_list(config))
  end

  def write_playground(config) do
    EEx.eval_file("#{@templates}/playground.eex", Map.to_list(config))
  end

  def write_hook(config) do
    EEx.eval_file("#{@templates}/hook.eex", Map.to_list(config))
  end

  def write_example(config) do
    EEx.eval_file("#{@templates}/example.eex", Map.to_list(config))
  end

  def write_prop(config) do
    EEx.eval_file("#{@templates}/prop.eex", Map.to_list(config))
  end

  def write_to_file({path, value}) when is_list(path) do
    Enum.each(path, &File.write!(&1, value))
  end

  def write_to_file({path, value}) do
    File.write!(path, value)
  end

  def create_prop(%{file: file} = prop_config) do
    path = "lib/lotus/props/#{file}.ex"
    File.touch(path)
    write_to_file({path, write_prop(prop_config)})
  end
end
