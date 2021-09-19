defmodule Lotus.TransitionTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_transition

  alias Lotus.Transition

  test "Creates a Transition" do
    html =
      render_surface do
        ~F"""
        <Transition>Hello</Transition>
        """
      end

    assert html =~ """
           <div class="uk-transition-toggle">
             Hello
           </div>
           """
  end
end
