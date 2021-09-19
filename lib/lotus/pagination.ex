defmodule Lotus.Pagination do
  @moduledoc """
  Easily create a nice looking pagination to navigate through pages.

  Documentation: https://getuikit.com/docs/pagination
  """
  use Lotus.ContainerComponent

  slot default

  def render(assigns) do
    ~F"""
    <ul class={pagination_class(assigns)} {...@opts}>
      <#slot />
    </ul>
    """
  end

  defp pagination_class(assigns) do
    [
      Surface.css_class("uk-pagination": true) | container_base_classes(assigns)
    ]
  end
end
