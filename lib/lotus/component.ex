defmodule Lotus.Component do
  defmacro __using__(_) do
    quote do
      use Surface.Component
    end
  end
end
