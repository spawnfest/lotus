defmodule Lotus.Props.Events do
  @moduledoc false

  defmacro __using__(_) do
    quote do
      use Surface.Components.Events

      alias Surface.Components.Utils

      def event_attrs(assigns) do
        [
          Surface.event_to_opts(assigns.capture_click, :"phx-capture-click"),
          Surface.event_to_opts(assigns.click, :"phx-click"),
          Surface.event_to_opts(assigns.window_focus, :"phx-window-focus"),
          Surface.event_to_opts(assigns.window_blur, :"phx-window-blur"),
          Surface.event_to_opts(assigns.focus, :"phx-focus"),
          Surface.event_to_opts(assigns.blur, :"phx-blur"),
          Surface.event_to_opts(assigns.window_keyup, :"phx-window-keyup"),
          Surface.event_to_opts(assigns.window_keydown, :"phx-window-keydown"),
          Surface.event_to_opts(assigns.keyup, :"phx-keyup"),
          Surface.event_to_opts(assigns.keydown, :"phx-keydown"),
          values_to_opts(assigns.values)
        ]
        |> List.flatten()
      end

      defp values_to_opts([]) do
        []
      end

      defp values_to_opts(values) when is_list(values) do
        values_to_attrs(values)
      end

      defp values_to_opts(_values) do
        []
      end

      defp values_to_attrs(values) when is_list(values) do
        for {key, value} <- values do
          {:"phx-value-#{key}", value}
        end
      end
    end
  end
end
