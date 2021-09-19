defmodule Lotus.Component do
  @moduledoc """
  Base component for Lotus, encapsulating mixins and prop modules
  """
  defmacro __using__(_) do
    quote do
      use Lotus.SimpleComponent
      use Lotus.Props.Text
      use Lotus.Props.Utility
      use Lotus.Props.Width

      defp base_classes(assigns) do
        width_class(assigns) ++
          text_class(assigns) ++
          utility_class(assigns) ++ simple_base_classes(assigns)
      end
    end
  end
end
