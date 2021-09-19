defmodule Lotus.Badge do
  @moduledoc """
  Creates nice looking notification badges. Documentation: https://getuikit.com/docs/badge
  """
  use Lotus.SimpleComponent

  @inlines ~w/span a/

  @doc """
  Which inline element are we using for this badge
  """
  prop el, :string, default: "span", values: @inlines

  @doc """
  The default slot - the value of this badge
  """
  slot default, required: true

  def render(assigns) do
    class = badge_class(assigns)

    case assigns.el do
      "span" ->
        ~F"""
        <span {=class} {...@opts}>
          <#slot />
        </span>
        """
      "a" ->
        ~F"""
        <a {=class} {...@opts}>
          <#slot />
        </a>
        """
    end
  end

  defp badge_class(assigns) do
    ["uk-badge"] ++ simple_base_classes(assigns)
  end
end
