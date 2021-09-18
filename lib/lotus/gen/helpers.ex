defmodule Lotus.Gen.Helpers do
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

  def generate_artifacts(%{
    directory: directory,
    main: main,
    test: test,
    examples: examples
  } = config) do
    File.mkdir(directory)
    File.touch(main)
    File.touch(test)
    Enum.each(examples, &File.touch!/1)
    if config[:playground], do: File.touch(config[:playground])
    if config[:hook], do: File.touch(config[:hook])
  end
end
