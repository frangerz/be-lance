class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.string :title
      t.text :description
      t.integer :total_cost
      t.datetime :payment_completed_at
      t.datetime :last_payment
      t.datetime :next_payment
      t.integer :recovered
      t.integer :owed

      t.timestamps null: false
    end
  end
end
