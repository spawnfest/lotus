defmodule Lotus.BlockTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_block

  alias Lotus.Block

  test "Creates a Block" do
    html =
      render_surface do
        ~F"""
        <Block>Hello</Block>
        """
      end

    assert html =~ """
           <div>
             Hello
           </div>
           """
  end

  test "Creates an inline Block" do
    html =
      render_surface do
        ~F"""
        <Block inline>Hello</Block>
        """
      end

    assert html =~ """
           <span>
             Hello
           </span>
           """
  end
end
