defmodule Lotus.Component do
  @moduledoc """
  Base component for Lotus, encapsulating mixins and prop modules
  """
  defmacro __using__(_) do
    quote do
      use Surface.Component
      use Lotus.Props.FallbackClass
      use Lotus.Props.Padding
      use Lotus.Props.Width

      defp get_classes(assigns) do
        padding_class(assigns) ++ width_class(assigns) ++ fallback_class(assigns)
      end
    end
  end
end
