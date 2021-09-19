defmodule Lotus.Card do
  @moduledoc """
  Create layout boxes with different styles.

  Documentation: https://getuikit.com/docs/card
  """
  use Lotus.Component

  @doc """
  color
  """
  prop color, :string, values: ~w/default primary secondary/

  @doc """
  size
  """
  prop size, :string, values: ~w/large small/

  @doc """
  hover
  """
  prop body, :boolean

  @doc """
  hover
  """
  prop hover, :boolean

  @doc """
  media
  """
  prop media, :string, values: ~w/top bottom left right/

  slot default

  def render(assigns) do
    ~F"""
    <div class={card_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp card_class(assigns) do
    [
      Surface.css_class(
        "uk-card": true,
        "uk-card-body": assigns.body,
        "uk-card-#{assigns.color}": assigns.color,
        "uk-card-#{assigns.size}": assigns.size,
        "uk-card-hover": assigns.hover,
        "uk-card-media-#{assigns.media}": assigns.media
      )
      | base_classes(assigns)
    ]
  end
end
