defmodule Lotus.CardBody do
  @moduledoc """
  Body of a card.

  Documentation: https://getuikit.com/docs/card
  """
  use Lotus.Component

  slot default

  def render(assigns) do
    ~F"""
    <div class={card_body_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp card_body_class(assigns) do
    [
      Surface.css_class("uk-card-body": true) | base_classes(assigns)
    ]
  end
end
