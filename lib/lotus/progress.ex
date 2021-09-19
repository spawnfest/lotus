defmodule Lotus.Progress do
  @moduledoc """
  Defines progress bars that indicate how far along a process is.

  Documentation: https://getuikit.com/docs/progress
  """
  use Surface.Component

  @doc """
  Value of the progress bar
  """
  prop value, :integer

  @doc """
  Maximum value
  """
  prop max, :integer, default: 100

  def render(assigns) do
    ~F"""
    <progress class={progress_class(assigns)} value={@value} max={@max} />
    """
  end

  defp progress_class(_assigns) do
    [Surface.css_class("uk-progress": true)]
  end
end
