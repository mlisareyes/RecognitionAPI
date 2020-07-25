class Api::V1::EmployeesController < ApplicationController

  def index
    @employees = Employee.all

    render json: @employees, status: 200
  end

  def show
    @employee = Employee.find(params[:id])

    render json: @employee, status: 200
  end

  def create
    @employee = Employee.create(employee_params)

    render json: @employee, status: 200
  end

  private

  def employee_params
    params.require(:employee).permit(:name)
  end
end
