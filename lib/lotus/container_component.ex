defmodule Lotus.ContainerComponent do
  @moduledoc """
  Base component for Lotus, encapsulating mixins and prop modules
  """
  defmacro __using__(_) do
    quote do
      use Lotus.Component
      use Lotus.Props.ChildWidth
      use Lotus.Props.Background
      use Lotus.Props.DarkMode
      use Lotus.Props.Flex
      use Lotus.Props.Grid
      use Lotus.Props.Height

      defp container_base_classes(assigns) do
        base_classes(assigns) ++
          background_class(assigns) ++
          flex_class(assigns) ++
          height_class(assigns) ++
          grid_class(assigns) ++
          child_width_class(assigns)
      end
    end
  end
end
