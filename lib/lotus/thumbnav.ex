defmodule Lotus.Thumbnav do
  @moduledoc """
  Create a flexible thumbnail navigation.

  Documentation: https://getuikit.com/docs/thumbnav
  """
  use Lotus.Component

  slot default

  def render(assigns) do
    ~F"""
    <ul class={thumbnav_class(assigns)} {...@opts}>
      <#slot />
    </ul>
    """
  end

  defp thumbnav_class(assigns) do
    [
      Surface.css_class("uk-thumbnav": true) | base_classes(assigns)
    ]
  end
end
