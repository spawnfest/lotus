defmodule Lotus.Button do
  @moduledoc """
  A Button element as defined by https://getuikit.com/docs/button
  """
  use Lotus.Component

  alias Lotus.Shared.Width

  @kinds ~w/default primary secondary danger text link/
  @sizes ~w/small large/

  @doc """
  Additional classes
  """
  prop class, :css_class, default: []

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
  Width of this button
  """
  prop width, :string, values: Width.width_specs()

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
      class={[
        "uk-button": @class == [],
        "uk-button-#{@kind}": @kind,
        "uk-button-#{@size}": @size
      ] ++ Width.assigns_to_width_classes(assigns) ++ @class}
      {...@opts}
    >
      <#slot>{@label}</#slot>
    </button>
    """
  end
end
