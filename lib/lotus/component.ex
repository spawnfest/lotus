defmodule Lotus.Component do
  @moduledoc """
  Base component for Lotus, encapsulating mixins and prop modules
  """
  defmacro __using__(_) do
    quote do
      use Surface.Component
    end
  end
end
