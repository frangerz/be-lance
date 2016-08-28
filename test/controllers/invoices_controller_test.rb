require 'test_helper'

class InvoicesControllerTest < ActionController::TestCase
  setup do
    @invoice = invoices(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:invoices)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create invoice" do
    assert_difference('Invoice.count') do
      post :create, invoice: { description: @invoice.description, last_payment: @invoice.last_payment, next_payment: @invoice.next_payment, owed: @invoice.owed, payment_completed_at: @invoice.payment_completed_at, recovered: @invoice.recovered, title: @invoice.title, total_cost: @invoice.total_cost }
    end

    assert_redirected_to invoice_path(assigns(:invoice))
  end

  test "should show invoice" do
    get :show, id: @invoice
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @invoice
    assert_response :success
  end

  test "should update invoice" do
    patch :update, id: @invoice, invoice: { description: @invoice.description, last_payment: @invoice.last_payment, next_payment: @invoice.next_payment, owed: @invoice.owed, payment_completed_at: @invoice.payment_completed_at, recovered: @invoice.recovered, title: @invoice.title, total_cost: @invoice.total_cost }
    assert_redirected_to invoice_path(assigns(:invoice))
  end

  test "should destroy invoice" do
    assert_difference('Invoice.count', -1) do
      delete :destroy, id: @invoice
    end

    assert_redirected_to invoices_path
  end
end
