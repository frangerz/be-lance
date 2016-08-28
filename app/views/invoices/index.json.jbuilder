json.array!(@invoices) do |invoice|
  json.extract! invoice, :id, :title, :description, :total_cost, :payment_completed_at, :last_payment, :next_payment, :recovered, :owed
  json.url invoice_url(invoice, format: :json)
end
