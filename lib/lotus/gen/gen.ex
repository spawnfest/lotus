defmodule Lotus.Gen do
  alias Lotus.Gen.Helpers

  @identifier "container"
  @current_module %{
    file: @identifier,
    module: Phoenix.Naming.camelize(@identifier),
    class: ~s/uk-#{@identifier |> String.replace("_", "-")}/,
    props: ["size"],
    responsive_props: ["size"],
    hook: false,
    playground: false,
    examples: 1
  }
  def get_config, do: @current_module

  def generate_modules do
    @current_module
    |> Helpers.list_artifacts()
    |> tap(&Helpers.generate_artifacts/1)
    |> Enum.map(fn
      {:examples, location} -> {location, Helpers.write_example(@current_module)}
      {:main, location} -> {location, Helpers.write_main(@current_module)}
      {:test, location} -> {location, Helpers.write_test(@current_module)}
      {:hook, location} -> {location, Helpers.write_hook(@current_module)}
      {:playground, location} -> {location, Helpers.write_playground(@current_module)}
      _ -> nil
    end)
    |> Enum.reject(&is_nil/1)
    |> Enum.map(fn v -> tap(v, &Helpers.write_to_file/1) end)
  end
end
