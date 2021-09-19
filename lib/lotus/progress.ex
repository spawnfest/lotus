defmodule Lotus.Progress do
  @moduledoc """
  <docs> https://getuikit.com/docs/progress
  """
  use Lotus.Component

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
    ) | base_classes(assigns)]
  end
end
