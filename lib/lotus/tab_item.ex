defmodule Lotus.TabItem do
  @moduledoc """
  Item of a tab heading

  Documentation: https://getuikit.com/docs/tab_item
  """
  use Lotus.Component

  @doc """
  active
  """
  prop tab_active, :boolean

  @doc """
  disabled
  """
  prop tab_disabled, :boolean

  slot default

  def render(assigns) do
    ~F"""
    <li class={tab_item_class(assigns)} {...@opts}>
      <#slot />
    </li>
    """
  end

  defp tab_item_class(assigns) do
    [
      Surface.css_class(
        "uk-tab-item": true,
        "uk-active": assigns.tab_active,
        "uk-disabled": assigns.tab_disabled
      )
      | base_classes(assigns)
    ]
  end
end
