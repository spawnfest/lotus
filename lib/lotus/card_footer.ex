defmodule Lotus.CardFooter do
  @moduledoc """
  # TODO 

  Documentation: https://getuikit.com/docs/card_footer
  """
  use Lotus.Component

  slot default

  def render(assigns) do
    ~F"""
    <div class={card_footer_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp card_footer_class(assigns) do
    [
      Surface.css_class("uk-card-footer": true) | base_classes(assigns)
    ]
  end
end
