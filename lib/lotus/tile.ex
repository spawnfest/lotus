defmodule Lotus.Tile do
  @moduledoc """
  Create layout boxes with different backgrounds that can be arranged seamlessly next to each other.

  Documentation: https://getuikit.com/docs/tile
  """
  use Lotus.Component

  @doc """
  Color of the tile
  """
  prop color, :string, default: "default", values: ~w/default muted primary seconday/

  slot default

  def render(assigns) do
    ~F"""
    <div class={tile_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp tile_class(assigns) do
    [
      Surface.css_class(
        "uk-tile": true,
        "uk-tile-#{assigns.color}": assigns.color
      )
      | base_classes(assigns)
    ]
  end
end
