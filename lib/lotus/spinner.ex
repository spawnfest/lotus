defmodule Lotus.Spinner do
  @moduledoc """
  # TODO

  Documentation: https://getuikit.com/docs/spinner
  """
  use Lotus.Component

  @doc """
  ratio
  """
  prop ratio, :integer, default: 1

  prop id, :string, required: true

  slot default

  def render(assigns) do
    ~F"""
    <div :hook="Spinner" {=@id} class={base_classes(assigns)} data-ratio={@ratio} {...@opts}>
      <#slot />
    </div>
    """
  end
end
