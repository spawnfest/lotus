defmodule Lotus.Props.Grid do
  @moduledoc """
  Create a fully responsive, fluid and nestable grid layout.

  Reference: https://getuikit.com/docs/grid
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Grid
      """
      prop grid, :boolean

      @doc """
      Grid_size
      """
      prop grid_size, :string, values: ~w/small medium large collapse/

      @doc """
      Grid_column_size
      """
      prop grid_column_size, :string, values: ~w/small medium large collapse/

      @doc """
      Grid_row_size
      """
      prop grid_row_size, :string, values: ~w/small medium large collapse/

      @doc """
      Doc of divider
      """
      prop grid_divider, :boolean

      @doc """
      Grid_match_height
      """
      prop grid_match_height, :string, values: ~w/all one/

      defp grid_class(assigns) do
        Surface.css_class(
          "uk-grid": assigns.grid,
          "uk-grid-#{assigns.grid_size}": assigns.grid_size,
          "uk-grid-column-#{assigns.grid_column_size}": assigns.grid_column_size,
          "uk-grid-row-#{assigns.grid_row_size}": assigns.grid_row_size,
          "uk-grid-divider": assigns.grid_divider,
          "uk-grid-match": assigns.grid_match_height == "all",
          "uk-grid-item-match": assigns.grid_match_height == "one"
        )
        |> List.wrap()
      end
    end
  end
end
