defmodule Lotus.Label do
  @moduledoc """
  Indicate important notes and highlight parts of your content.

  Documentation: https://getuikit.com/docs/label
  """
  use Lotus.Component

  @doc """
  Doc of style
  """
  prop color, :string, values: ~w/success warning danger/

  slot default, required: true

  def render(assigns) do
    ~F"""
    <div class={label_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp label_class(assigns) do
    [
      Surface.css_class(
        "uk-label": true,
        "uk-label-#{assigns.color}": assigns.color
      )
      | base_classes(assigns)
    ]
  end
end
