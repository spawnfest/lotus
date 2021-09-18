defmodule Lotus.Props.FallbackClass do
  @moduledoc """
  Fallback classes, use class-list for mixing classes that are not part of the Lotus API (yet)
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Additional classes
      """
      prop class, :css_class, default: []

      defp fallback_class(assigns), do: assigns.class
    end
  end
end
