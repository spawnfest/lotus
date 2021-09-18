defmodule Lotus.Button do
  @moduledoc """
  A Button element as defined by https://getuikit.com/docs/button
  """
  use Lotus.Component

  @kinds ~w/default primary secondary danger text link/
  @sizes ~w/small large/

  @doc """
  Label of the button, can be used in lieu of slot
  """
  prop label, :string

  @doc """
  Kind of this button based on UIkit kinds
  """
  prop kind, :string, values: @kinds

  @doc """
  Size of this button
  """
  prop size, :string, values: @sizes

  @doc """
  Width at small-screen
  """
  prop small, :string

  @doc """
  Width at medium-screen
  """
  prop medium, :string

  @doc """
  Width at large-screen
  """
  prop large, :string

  @doc """
  Width at extra large screen
  """
  prop extra_large, :string

  @doc """
  Default click action
  """
  prop click, :event

  slot default

  @doc """
  Additional attributes to add onto the generated element
  """
  prop opts, :keyword, default: []

  def render(assigns) do
    ~F"""
    <button
      :on-click={@click}
      type="button"
      class={button_class(assigns)}
      {...@opts}
    >
      <#slot>{@label}</#slot>
    </button>
    """
  end

  defp button_kind_class(assigns) do
    Surface.css_class(
      "uk-button": assigns.class == [],
      "uk-button-#{assigns.kind}": assigns.kind,
      "uk-button-#{assigns.size}": assigns.size
    )
    |> List.wrap()
  end

  defp button_class(assigns) do
    button_kind_class(assigns) ++ get_classes(assigns)
  end
end
