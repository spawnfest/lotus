defmodule Lotus.CardHeader do
  @moduledoc """
  # TODO 

  Documentation: https://getuikit.com/docs/card_header
  """
  use Lotus.Component

  slot default

  def render(assigns) do
    ~F"""
    <div class={card_header_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp card_header_class(assigns) do
    [
      Surface.css_class("uk-card-header": true) | base_classes(assigns)
    ]
  end
end
