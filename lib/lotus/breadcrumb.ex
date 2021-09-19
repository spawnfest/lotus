defmodule Lotus.Breadcrumb do
  @moduledoc """
  Create breadcrumbs to show users their location within a website.

  Documentation: https://getuikit.com/docs/breadcrumb
  """
  use Lotus.SimpleComponent

  slot default

  def render(assigns) do
    ~F"""
    <ul class={breadcrumb_class(assigns)} {...@opts}>
      <#slot />
    </ul>
    """
  end

  defp breadcrumb_class(assigns) do
    [
      Surface.css_class("uk-breadcrumb": true) | simple_base_classes(assigns)
    ]
  end
end
