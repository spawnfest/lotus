defmodule Lotus.Dotnav do
  @moduledoc """
  Create a dot navigation to operate slideshows or to scroll to different page sections.

  Documentation: https://getuikit.com/docs/dotnav
  """
  use Lotus.Component

  @doc """
  Is this vertical dotnav?
  """
  prop vertical, :boolean

  slot default

  def render(assigns) do
    ~F"""
    <ul class={dotnav_class(assigns)} {...@opts}>
      <#slot />
    </ul>
    """
  end

  defp dotnav_class(assigns) do
    [
      Surface.css_class("uk-dotnav": true, "uk-dotnav-vertical": assigns.vertical)
      | base_classes(assigns)
    ]
  end
end
