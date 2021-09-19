defmodule Lotus.CardTitle do
  @moduledoc """
  Title of a card.

  Documentation: https://getuikit.com/docs/card
  """
  use Lotus.Component

  slot default

  def render(assigns) do
    ~F"""
    <h3 class={card_title_class(assigns)} {...@opts}>
      <#slot />
    </h3>
    """
  end

  defp card_title_class(assigns) do
    [
      Surface.css_class("uk-card-title": true) | base_classes(assigns)
    ]
  end
end
