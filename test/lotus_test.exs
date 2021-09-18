defmodule LotusTest do
  use ExUnit.Case
  doctest Lotus

  test "greets the world" do
    assert Lotus.hello() == :world
  end
end
