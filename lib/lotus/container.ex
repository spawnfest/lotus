defmodule Lotus.Container do
  @moduledoc """
  This component allows you to align and center your page content.

  Documentation: https://getuikit.com/docs/container
  """
  use Lotus.Component

  @doc """
  Doc of size
  """
  prop size, :string, values: ~w/xsmall small large xlarge expand/

  slot default, required: true

  def render(assigns) do
    ~F"""
    <div class={container_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp container_class(assigns) do
    [
      Surface.css_class(
        "uk-container": true,
        "uk-container-#{assigns.size}": assigns.size
      )
      | base_classes(assigns)
    ]
  end
end
