defmodule Lotus.DescriptionList do
  @moduledoc """
  Easily create nice looking description lists, which come in different styles.

  Documentation: https://getuikit.com/docs/description-list
  """
  use Lotus.SimpleComponent

  @doc """
  divider
  """
  prop divider, :boolean

  slot default

  def render(assigns) do
    ~F"""
    <dl class={description_list_class(assigns)} {...@opts}>
      <#slot />
    </dl>
    """
  end

  defp description_list_class(assigns) do
    [
      Surface.css_class(
        "uk-description-list": true,
        "uk-description-list-divider": assigns.divider
      )
      | simple_base_classes(assigns)
    ]
  end
end
