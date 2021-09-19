defmodule Lotus.AccordionItem do
  @moduledoc """
  An item of accordion
  """
  use Lotus.Component

  @doc """
  title
  """
  prop title, :string, required: true

  @doc """
  open
  """
  prop open, :boolean

  slot default

  def render(assigns) do
    ~F"""
    <li class={accordion_item_class(assigns)} {...@opts}>
      <a class="uk-accordion-title" href="#">{@title}</a>
      <div class="uk-accordion-content">
        <#slot />
      </div>
    </li>
    """
  end

  defp accordion_item_class(assigns) do
    [
      Surface.css_class("uk-open": assigns.open) | base_classes(assigns)
    ]
  end
end
