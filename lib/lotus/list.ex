defmodule Lotus.List do
  @moduledoc """
  Easily create nice looking lists, which come in different styles

  Documentation: https://getuikit.com/docs/list
  """
  use Lotus.SimpleComponent

  @doc """
  Marker
  """
  prop marker, :string, values: ~w/disc circle square decimal hyphen/

  @doc """
  Color
  """
  prop color, :string, values: ~w/muted emphasis primary secondary/

  @doc """
  Divider
  """
  prop divider, :boolean

  @doc """
  Striped
  """
  prop striped, :boolean

  @doc """
  Size
  """
  prop size, :string, values: ~w/large collapse/

  slot default

  def render(assigns) do
    ~F"""
    <ul class={list_class(assigns)} {...@opts}>
      <#slot />
    </ul>
    """
  end

  defp list_class(assigns) do
    [
      Surface.css_class(
        "uk-list": true,
        "uk-list-#{assigns.marker}": assigns.marker,
        "uk-list-#{assigns.color}": assigns.color,
        "uk-list-divider": assigns.divider,
        "uk-list-striped": assigns.striped,
        "uk-list-#{assigns.size}": assigns.size
      )
      | simple_base_classes(assigns)
    ]
  end
end
