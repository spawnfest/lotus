defmodule Lotus.Gen do
  @moduledoc """
  Generator functions to create components and props
  """
  alias Lotus.Gen.Helpers

  # ------------------------------------------------------- MODULES
  @identifier "tab_item"
  @current_module %{
    file: @identifier,
    module: Phoenix.Naming.camelize(@identifier),
    class: ~s/uk-#{@identifier |> String.replace("_", "-")}/,
    props: ["active", "disabled"],
    responsive_props: [],
    hook: true,
    playground: false,
    examples: 1
  }
  def get_module, do: @current_module

  def generate_module do
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

  # ------------------------------------------------------- PROPS
  @identifier "transition"
  @current_prop %{
    file: @identifier,
    module: Phoenix.Naming.camelize(@identifier),
    class: ~s/uk-#{@identifier |> String.replace("_", "-")}/,
    props: ["transition"],
    responsive_props: []
  }
  def get_prop, do: @current_module

  def generate_prop do
    Helpers.create_prop(@current_prop)
  end
end
