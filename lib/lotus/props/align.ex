defmodule Lotus.Props.Align do
  @moduledoc """
  <docs> https://getuikit.com/docs/align
  """
  defmacro __using__(_) do
    quote do
      @align_direction ~w/left right center/
      @doc """
      Align direction
      """
      prop align_direction, :string, values: @align_direction

      @doc """
      Align direction (Small)
      """
      prop align_direction_small, :string, values: @align_direction

      @doc """
      Align direction (Medium)
      """
      prop align_direction_medium, :string, values: @align_direction

      @doc """
      Align direction (Large)
      """
      prop align_direction_large, :string, values: @align_direction

      @doc """
      Align direction (Extra large)
      """
      prop align_direction_xlarge, :string, values: @align_direction

      defp align_class(assigns) do
        Surface.css_class(
          "uk-align": true,
          "uk-align-#{assigns.align_direction}": assigns.align_direction,
          "uk-align-#{assigns.align_direction_small}@s": assigns.align_direction_small,
          "uk-align-#{assigns.align_direction_medium}@m": assigns.align_direction_medium,
          "uk-align-#{assigns.align_direction_large}@l": assigns.align_direction_large,
          "uk-align-#{assigns.align_direction_xlarge}@xl": assigns.align_direction_xlarge
        )
        |> List.wrap()
      end
    end
  end
end
