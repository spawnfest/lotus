defmodule Lotus.Tab do
  @moduledoc """
  Create a tabbed navigation with different styles.

  Documentation: https://getuikit.com/docs/tab
  """
  use Lotus.Component

  prop id, :string, required: true

  @doc """
  position of tab heading
  """
  prop position, :string, values: ~w/top bottom left right/

  slot default

  def render(assigns) do
    ~F"""
    <ul :hook="Tab" {=@id} class={tab_class(assigns)} {...@opts}>
      <#slot />
    </ul>
    """
  end

  defp tab_class(assigns) do
    [
      Surface.css_class("uk-tab-#{assigns.position}": assigns.position) | base_classes(assigns)
    ]
  end
end
