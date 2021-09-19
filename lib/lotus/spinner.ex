defmodule Lotus.Spinner do
  @moduledoc """
  Create an animated loading spinner.

  Documentation: https://getuikit.com/docs/spinner
  """
  use Lotus.SimpleComponent

  @doc """
  ratio
  """
  prop ratio, :integer, default: 1

  prop id, :string, required: true

  slot default

  def render(assigns) do
    ~F"""
    <div :hook="Spinner" {=@id} class={simple_base_classes(assigns)} data-ratio={@ratio} {...@opts}>
      <#slot />
    </div>
    """
  end
end
