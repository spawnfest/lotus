defmodule Lotus.Page do
  @moduledoc """
  Easily create a nice looking pagination to navigate through pages.

  Documentation: https://getuikit.com/docs/pagination
  """
  use Lotus.SimpleComponent

  @doc """
  page_active
  """
  prop page_active, :boolean

  @doc """
  page_disabled
  """
  prop page_disabled, :boolean

  slot default

  def render(assigns) do
    ~F"""
    <li class={page_class(assigns)} {...@opts}>
      <#slot />
    </li>
    """
  end

  defp page_class(assigns) do
    [
      Surface.css_class(
        "uk-active": assigns.page_active,
        "uk-disabled": assigns.page_disabled
      )
      | simple_base_classes(assigns)
    ]
  end
end
