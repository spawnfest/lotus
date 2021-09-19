defmodule Lotus.SpinnerTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_spinner

  alias Lotus.Spinner

  test "Creates a Spinner" do
    html =
      render_surface do
        ~F"""
        <Spinner id="1">Hello</Spinner>
        """
      end

    assert html =~ """
           <div phx-hook="Lotus.Spinner#Spinner" id="1" data-ratio="1">
             Hello
           </div>
           """
  end
end
