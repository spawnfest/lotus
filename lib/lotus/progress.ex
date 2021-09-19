defmodule Lotus.Progress do
  @moduledoc """
  Defines progress bars that indicate how far along a process is.

  Documentation: https://getuikit.com/docs/progress
  """
  use Lotus.SimpleComponent

  @doc """
  Value of the progress bar
  """
  prop value, :integer

  @doc """
  Maximum value
  """
  prop max, :integer

  def render(assigns) do
    ~F"""
    <progress class={progress_class(assigns)} value={@value} max={@max} {...@opts}></progress>
    """
  end

  defp progress_class(assigns) do
    [Surface.css_class(
      "uk-progress": true
    ) | simple_base_classes(assigns)]
  end
end
