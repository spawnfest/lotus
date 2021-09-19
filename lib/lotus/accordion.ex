defmodule Lotus.Accordion do
  @moduledoc """
  Create a list of items that can be shown individually by clicking an item's header.

  Documentation: https://getuikit.com/docs/accordion
  """
  use Lotus.Component

  prop id, :string, required: true

  @doc """
  collapsible
  """
  prop collapsible, :boolean

  @doc """
  multiple
  """
  prop multiple, :boolean

  slot default

  def render(assigns) do
    ~F"""
    <ul
      {=@id}
      :hook="Accordion"
      data-collapsible={@collapsible}
      data-multiple={@multiple}
      class={base_classes(assigns)}
      {...@opts}
    >
      <#slot />
    </ul>
    """
  end
end
