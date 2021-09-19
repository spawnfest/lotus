defmodule Lotus.SimpleComponent do
  @moduledoc """
  A Simple base component for Lotus, encapsulating mixins and prop modules
  """
  defmacro __using__(_) do
    quote do
      use Surface.Component
      use Lotus.Props.FallbackClass
      use Lotus.Props.Padding

      @doc """
      Additional attributes to add onto the generated element
      """
      prop opts, :keyword, default: []

      defp simple_base_classes(assigns) do
        padding_class(assigns) ++ fallback_class(assigns)
      end
    end
  end
end