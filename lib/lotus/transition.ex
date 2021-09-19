defmodule Lotus.Transition do
  @moduledoc """
  # TODO

  Documentation: https://getuikit.com/docs/transition
  """
  use Lotus.Component

  @doc """
  Tabindex
  """
  prop tabindex, :string
  slot default

  def render(assigns) do
    ~F"""
    <div class={transition_toggle_class(assigns)} {=@tabindex} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp transition_toggle_class(assigns) do
    [
      Surface.css_class("uk-transition-toggle": true) | base_classes(assigns)
    ]
  end
end
