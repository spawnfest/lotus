defmodule Lotus.Gen.Helpers do
  @type artifact() :: %{}
  @doc """
  List artifacts (directory and files) that need to be generated. For the purpose of wrapping a new component.
  """
  @spec list_artifacts(map()) :: map()
  def list_artifacts(%{
        hook: hook,
        module: module,
        examples: examples,
        playground: playground
      }) do
    [
      {:directory, "priv/catalogue/#{module}"},
      {:main, "lotus/#{module}.ex"},
      {:test, "test/lotus/#{module}_test.exs"},
      {:playground, (playground && "priv/catalogue/#{module}/playground.ex") || nil},
      {:hook, (hook && "lotus/#{module}.hooks.js") || nil},
      examples(module, length(examples))
    ]
    |> Enum.reject(&(&1 |> elem(1) |> is_nil()))
    |> Enum.into(%{})
  end

  defp examples(module, count) do
    example_files = for i <- 0..count, do: "priv/catalogue/#{module}/example0#{i + 1}.ex"
    {:examples, example_files}
  end
end
