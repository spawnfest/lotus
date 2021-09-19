defmodule Lotus.ProgressTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_progress

  alias Lotus.Progress

  test "Creates a Progress" do
    html =
      render_surface do
        ~F"""
        <Progress value={10} max={100} />
        """
      end

    assert html =~ """
           <progress class="uk-progress" value="10" max="100"></progress>
           """
  end
end
