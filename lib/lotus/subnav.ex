defmodule Lotus.Subnav do
  @moduledoc """
  Defines different styles for a sub navigation.

  Documentation: https://getuikit.com/docs/subnav
  """
  use Lotus.SimpleComponent

  slot default

  def render(assigns) do
    ~F"""
    <div class={subnav_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp subnav_class(assigns) do
    [
      Surface.css_class("uk-subnav": true) | simple_base_classes(assigns)
    ]
  end
end
