"use client";

import React, { useState } from "react";
import {
  FiFilter,
  FiFileText,
  FiEdit2,
  FiSmartphone,
  FiDownload,
  FiZap,
  FiCheck,
  FiCopy,
  FiColumns,
  FiMove,
  FiMaximize2,
  FiEye,
  FiEdit,
  FiCommand,
  FiLayers,
  FiMonitor,
  FiCode,
} from "react-icons/fi";

const features = [
  {
    icon: <FiFilter />,
    bg: "bg-blue-50",
    color: "text-blue-600",
    title: "Sorting & Filtering",
    description:
      "Real-time multi-column search, dynamic filters and multi-state column sorting.",
  },
  {
    icon: <FiFileText />,
    bg: "bg-purple-50",
    color: "text-purple-600",
    title: "Pagination",
    description:
      "Built-in pagination with configurable page sizes and optional top pagination.",
  },
  {
    icon: <FiEdit2 />,
    bg: "bg-amber-50",
    color: "text-amber-600",
    title: "Custom Styling",
    description:
      "Supports preset themes and custom Tailwind classes for table areas.",
  },
  {
    icon: <FiSmartphone />,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    title: "Responsive Design",
    description:
      "Responsive table layouts with configurable horizontal and vertical scrolling.",
  },
  {
    icon: <FiDownload />,
    bg: "bg-sky-50",
    color: "text-sky-600",
    title: "CSV Export",
    description:
      "Export active filtered and sorted table data to CSV with one click.",
  },
  {
    icon: <FiZap />,
    bg: "bg-pink-50",
    color: "text-pink-600",
    title: "Performance",
    description:
      "Designed for smooth interaction with large datasets and configurable scrolling.",
  },
  {
    icon: <FiEye />,
    bg: "bg-indigo-50",
    color: "text-indigo-600",
    title: "Column Visibility",
    description:
      "Show or hide columns while preserving layout preferences in localStorage.",
  },
  {
    icon: <FiMove />,
    bg: "bg-violet-50",
    color: "text-violet-600",
    title: "Column Reordering",
    description:
      "Drag and drop column headers or reorder columns from the Columns menu.",
  },
  {
    icon: <FiMaximize2 />,
    bg: "bg-cyan-50",
    color: "text-cyan-600",
    title: "Column Resizing",
    description:
      "Resize columns using drag handles and reset widths when needed.",
  },
  {
    icon: <FiColumns />,
    bg: "bg-orange-50",
    color: "text-orange-600",
    title: "Drop Column to Hide",
    description:
      "Drag a column header into the drop zone to hide it instantly.",
  },
  {
    icon: <FiEdit />,
    bg: "bg-green-50",
    color: "text-green-600",
    title: "Inline Row Editing",
    description:
      "Edit row values directly with text or select controls and save changes easily.",
  },
  {
    icon: <FiLayers />,
    bg: "bg-red-50",
    color: "text-red-600",
    title: "Bulk Editing",
    description:
      "Select multiple rows and update chosen columns simultaneously.",
  },
  {
    icon: <FiCommand />,
    bg: "bg-fuchsia-50",
    color: "text-fuchsia-600",
    title: "Keyboard Navigation",
    description:
      "Navigate table cells using arrow keys and activate controls with Enter or Space.",
  },
  {
    icon: <FiMonitor />,
    bg: "bg-teal-50",
    color: "text-teal-600",
    title: "Flexible Layout",
    description:
      "Configure table width, height and horizontal or vertical scrolling behavior.",
  },
];

const propsList = [
  {
    name: "searchable",
    type: "boolean",
    description: "Show or hide the global search input.",
  },
  {
    name: "filterable",
    type: "boolean",
    description: "Enable or disable the filter button menu.",
  },
  {
    name: "sortable",
    type: "boolean",
    description: "Enable or disable column header sorting.",
  },
  {
    name: "pagination",
    type: "boolean",
    description: "Enable or disable table pagination.",
  },
  {
    name: "topPagination",
    type: "boolean",
    description: "Show both top and bottom pagination controls.",
  },
  {
    name: "columnVisibility",
    type: "boolean",
    description: "Show or hide the Columns dropdown menu.",
  },
  {
    name: "selectable",
    type: "boolean",
    description: "Enable row selection checkboxes.",
  },
  {
    name: "keyboardNavigation",
    type: "boolean",
    description: "Enable arrow-key grid navigation.",
  },
  {
    name: "exportable",
    type: "boolean",
    description: "Enable CSV export.",
  },
  {
    name: "bulkEditable",
    type: "boolean",
    description: "Enable bulk editing mode.",
  },
  {
    name: "columnordering",
    type: "boolean",
    description: "Enable drag-and-drop column ordering.",
  },
  {
    name: "columnwidth",
    type: "boolean",
    description: "Enable column resizing.",
  },
  {
    name: "dropcolumn",
    type: "boolean",
    description: "Enable dropzone-based column hiding.",
  },
  {
    name: "tableWidth",
    type: "string | number",
    description: 'Configure the table width, for example "100%" or "900px".',
  },
  {
    name: "tableHeight",
    type: "string | number",
    description: 'Configure table height, for example "350px" or "auto".',
  },
];

export default function OpenSourceFeatures() {
  const [activeTab, setActiveTab] = useState("Installation");
  const [copiedKey, setCopiedKey] = useState("");

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);

      setTimeout(() => {
        setCopiedKey("");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section className="w-full py-8 text-left">
      {/* =========================================================
          WHY REACT FLEXI DATATABLE
      ========================================================= */}
      <div className="space-y-8">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B1E3B] sm:text-3xl">
            Why react-flexi-datatable?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Powerful features designed for flexible and configurable React data tables.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.bg} ${feature.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          INSTALLATION / USAGE / PROPS
      ========================================================= */}
      <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* ================= LEFT INFO ================= */}
        <div className="space-y-5 lg:col-span-5">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0B1E3B] sm:text-3xl">
              Built for developers
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Configure the table exactly according to your application's requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
              <FiCode className="mb-3 text-xl text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Flexible API</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Configure search, filtering, sorting, pagination and table behavior.
              </p>
            </div>

            <div className="rounded-xl border border-purple-100 bg-purple-50/70 p-4">
              <FiColumns className="mb-3 text-xl text-purple-600" />
              <h3 className="text-sm font-bold text-slate-900">Column Control</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Reorder, resize, hide and customize table columns.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
              <FiSmartphone className="mb-3 text-xl text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900">Responsive</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Support for responsive layouts and horizontal scrolling.
              </p>
            </div>

            <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-4">
              <FiZap className="mb-3 text-xl text-amber-600" />
              <h3 className="text-sm font-bold text-slate-900">Developer Ready</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Built for configurable real-world data management needs.
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CODE CARD ================= */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-7">
          {/* Tabs */}
          <div className="border-b border-slate-100">
            <div className="flex items-center gap-6">
              {["Installation", "Usage", "Props"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-bold transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ================= INSTALLATION ================= */}
          {activeTab === "Installation" && (
            <div className="space-y-4 pt-5 text-left">
              {/* npm */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-500">
                  Install via npm
                </span>
                <div className="flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-[#0B1528] px-4 py-3 font-mono text-xs text-sky-100 sm:text-sm">
                  <code className="overflow-x-auto whitespace-nowrap">
                    npm install react-flexi-datatable
                  </code>
                  <button
                    onClick={() =>
                      handleCopy("npm install react-flexi-datatable", "npm")
                    }
                    className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                  >
                    {copiedKey === "npm" ? (
                      <FiCheck className="text-emerald-400" />
                    ) : (
                      <FiCopy />
                    )}
                  </button>
                </div>
              </div>

              {/* yarn */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-500">
                  Or via yarn
                </span>
                <div className="flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-[#0B1528] px-4 py-3 font-mono text-xs text-sky-100 sm:text-sm">
                  <code className="overflow-x-auto whitespace-nowrap">
                    yarn add react-flexi-datatable
                  </code>
                  <button
                    onClick={() =>
                      handleCopy("yarn add react-flexi-datatable", "yarn")
                    }
                    className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                  >
                    {copiedKey === "yarn" ? (
                      <FiCheck className="text-emerald-400" />
                    ) : (
                      <FiCopy />
                    )}
                  </button>
                </div>
              </div>

              {/* pnpm */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-500">
                  Or via pnpm
                </span>
                <div className="flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-[#0B1528] px-4 py-3 font-mono text-xs text-sky-100 sm:text-sm">
                  <code className="overflow-x-auto whitespace-nowrap">
                    pnpm add react-flexi-datatable
                  </code>
                  <button
                    onClick={() =>
                      handleCopy("pnpm add react-flexi-datatable", "pnpm")
                    }
                    className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                  >
                    {copiedKey === "pnpm" ? (
                      <FiCheck className="text-emerald-400" />
                    ) : (
                      <FiCopy />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= USAGE ================= */}
          {activeTab === "Usage" && (
            <div className="pt-5 text-left">
              <div className="relative overflow-hidden rounded-xl bg-[#0B1528]">
                <button
                  onClick={() =>
                    handleCopy(
                      `import React, { useState } from "react";
import DataTable from "react-flexi-datatable";

const tableConfig = {
  title: "User Directory",
  theme: "default",
  searchable: true,
  filterable: true,
  sortable: true,
  pagination: true,
  exportable: true,
  selectable: true,
  columnVisibility: true,
  keyboardNavigation: true,
  bulkEditable: true,
  columnordering: true,
  columnwidth: true,
  pageSize: 5,
  pageSizeOptions: [5, 10, 20],
};

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@example.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  return (
    <DataTable
      config={tableConfig}
      data={data}
    />
  );
}`,
                      "usage"
                    )
                  }
                  className="absolute right-3 top-3 rounded-md bg-slate-800 p-1.5 text-slate-300 transition hover:bg-slate-700"
                >
                  {copiedKey === "usage" ? (
                    <FiCheck className="text-emerald-400" />
                  ) : (
                    <FiCopy />
                  )}
                </button>

                <pre className="max-h-[420px] overflow-auto p-5 text-[11px] leading-6 text-sky-200 sm:text-xs">
{`import React, { useState } from "react";
import DataTable from "react-flexi-datatable";

const tableConfig = {
  title: "User Directory",
  theme: "default",
  searchable: true,
  filterable: true,
  sortable: true,
  pagination: true,
  exportable: true,
  selectable: true,
  columnVisibility: true,
  keyboardNavigation: true,
  bulkEditable: true,
  columnordering: true,
  columnwidth: true,
  pageSize: 5,
  pageSizeOptions: [5, 10, 20],
};

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@example.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  return (
    <DataTable
      config={tableConfig}
      data={data}
    />
  );
}`}
                </pre>
              </div>
            </div>
          )}

          {/* ================= PROPS ================= */}
          {activeTab === "Props" && (
            <div className="max-h-[430px] space-y-3 overflow-y-auto pt-5 text-left">
              {propsList.map((prop) => (
                <div
                  key={prop.name}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {prop.name}
                    </span>
                    <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700">
                      {prop.type}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* =========================================================
          THEMES
      ========================================================= */}
      <div className="mt-14">
        <div className="mb-7">
          <h2 className="text-2xl font-extrabold text-[#0B1E3B] sm:text-3xl">
            Themes &amp; Layout
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose a preset theme or customize the table appearance.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            {
              name: "Default",
              style: "bg-white border-slate-200 text-slate-700",
            },
            {
              name: "Dark",
              style: "bg-slate-800 border-slate-800 text-white",
            },
            {
              name: "Indigo",
              style: "bg-indigo-50 border-indigo-200 text-indigo-700",
            },
            {
              name: "Emerald",
              style: "bg-emerald-50 border-emerald-200 text-emerald-700",
            },
            {
              name: "Slate",
              style: "bg-slate-100 border-slate-300 text-slate-700",
            },
            {
              name: "Blue",
              style: "bg-blue-50 border-blue-200 text-blue-700",
            },
          ].map((theme) => (
            <div
              key={theme.name}
              className={`rounded-xl border p-4 text-center text-sm font-bold shadow-sm ${theme.style}`}
            >
              {theme.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
